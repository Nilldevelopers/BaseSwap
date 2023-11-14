import Image from "next/image";

const ImageImporter = ({src, w, h}: { src: string, w?: number, h?: number }) => {
    return (
        <Image
            src={src}
            data-sizes="auto"
            data-src={src}
            data-srcset={`${src} 300w,${src} 600w,${src} 900w`}
            className="lazyload"
            alt={"import image dynamic"}
            width={w}
            height={h}
        />
    );
};

export default ImageImporter;