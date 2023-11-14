import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormValues = {
  [key: string]: string;
};

export type InputConfig = {
  name: string;
  defaultValue: string | string[];
  label: string;
  type: "text" | "radio" | "checkbox"; // Add a new type for radio buttons
  options?: string[]; // Array of options for radio buttons
  validationSchema: yup.AnySchema;
};

function FormGenerator({
  inputConfigs,
  callBackFn,
}: {
  inputConfigs: InputConfig[];
  callBackFn: (data: FormValues) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(
      yup.object().shape(
        inputConfigs.reduce((schema, config) => {
          return {
            ...schema,
            [config.name]: config.validationSchema,
          };
        }, {})
      )
    ),
    defaultValues: inputConfigs.reduce((values, config) => {
      return {
        ...values,
        [config.name]: config.defaultValue,
      };
    }, {}),
  });

  const onSubmit = handleSubmit((data) => callBackFn(data));

  return (
    <form onSubmit={onSubmit}>
      {inputConfigs.map((inputConfig) => (
        <div key={inputConfig.name}>
          {inputConfig.type === "text" ? (
            <>
              <label>{inputConfig.label}</label>
              <input
                {...register(inputConfig.name)}
                defaultValue={inputConfig.defaultValue}
              />
            </>
          ) : inputConfig.type === "radio" ? (
            <>
              <div>{inputConfig.label}</div>
              {inputConfig.options?.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    value={option}
                    {...register(inputConfig.name)}
                  />
                  {option}
                </label>
              ))}
            </>
          ) : inputConfig.type === "checkbox" ? (
            <>
              <div>{inputConfig.label}</div>
              {inputConfig.options?.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    value={option}
                    {...register(inputConfig.name)}
                  />
                  {option}
                </label>
              ))}
            </>
          ) : null}
          <p style={{ color: "red" }}>{errors[inputConfig.name]?.message}</p>
        </div>
      ))}
      <input type="submit" />
    </form>
  );
}

export default FormGenerator;
