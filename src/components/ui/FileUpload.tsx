// src/components/ui/FileUpload.tsx

interface FileUploadProps {
    title: string;
    description: string;
    fileTypes: string;
    maxSize: string;
    multiple?: boolean;
    onChange: (file: File | File[] | null) => void; // Keep this as is
}

const FileUpload: React.FC<FileUploadProps> = ({
    title,
    description,
    fileTypes,
    maxSize,
    multiple = false,
    onChange,
}) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (multiple) {
            // Handle multiple file upload
            const files = event.target.files ? Array.from(event.target.files) : [];
            onChange(files.length > 0 ? files : null);
        } else {
            // Handle single file upload
            const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;
            onChange(file);
        }
    };

    return (
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
            {/* Section Title */}
            <div className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800 max-md:max-w-full">
                <h3 className="self-stretch my-auto">{title}</h3>
                <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
            </div>

            {/* Description */}
            <div className="mt-2.5 text-lg font-medium leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
                {description}
            </div>

            {/* File Input */}
            <div className="flex flex-col mt-4 px-6 py-4 border border-solid border-stone-800 rounded-lg bg-white max-md:px-5 max-md:max-w-full">
                <input
                    type="file"
                    accept={fileTypes}
                    multiple={multiple}
                    onChange={handleFileChange}
                    className="w-full bg-transparent"
                />
                <p className="mt-2 text-sm text-gray-500">Accepted file types: {fileTypes}</p>
                <p className="mt-1 text-sm text-gray-500">Max size: {maxSize}</p>
            </div>
        </div>
    );
};

export default FileUpload;
