import Image from "next/image";

const ImageImporter = ({src, w, h, className, alt}: {
    src: string,
    w?: number,
    h?: number,
    className?: string,
    alt?: string
}) => {
    return (
        <Image
            src={src}
            data-sizes="auto"
            data-src={src}
            data-srcset={`${src} 300w,${src} 600w,${src} 900w`}
            className={`lazyload ${className}`}
            alt={alt === undefined ? "import image dynamic" : alt}
            width={w}
            height={h}
        />
    );
};

export default ImageImporter;