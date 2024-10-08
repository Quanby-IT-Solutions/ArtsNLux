// src/components/forms/exhibitor/step-5/Documents.tsx

import Image from "next/image";

import { ExhibitorInfo } from "@/interfaces/exhibitor";

import ProgressBar from "@/components/ui/ProgressBar";
import FileUpload from "@/components/ui/FileUpload";
import RadioGroup from "@/components/ui/RadioGroup";
import InputField from "@/components/ui/InputField";
import NavigationButtons from "@/components/ui/NavigationButtons";

interface DocumentsProps {
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const Documents: React.FC<DocumentsProps> = ({
  data,
  updateData,
  handleNext,
  handlePrev,
}) => {
  // Handler for updating mayor's permit file
  const handleMayorPermitChange = (file: File | File[] | null) => {
    if (file instanceof File || file === null) {
      updateData({ mayorPermit: file });
    }
  };

  // Handler for updating product photos array
  const handleProductPhotosChange = (files: File | File[] | null) => {
    if (Array.isArray(files)) {
      updateData({ productPhotos: files });
    }
  };

  return (
    <main className="flex overflow-hidden flex-col">
      {/* Header and Progress Bar */}
      <div className="flex flex-col self-center max-w-full w-[794px]">
        <section className="flex flex-col mt-24 max-w-full w-[433px] max-md:mt-10">
          <h2 className="w-full text-4xl font-bold rounded-none text-stone-800 max-md:pr-5">
            Upload Files
          </h2>
          <ProgressBar current={5} total={7} />
        </section>
      </div>

      {/* Document Upload Section */}
      <div className="mt-8 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left Column - Illustrations */}
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c29ae1e77f7f9d8a59b4726db609e5ed3ef58e42000d1e567aff2488df37243?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                alt="Exhibitor account illustration"
                width={500}
                height={330}
                className="object-contain w-full aspect-[1.52] max-md:max-w-full"
              />
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ed382ff1597e4d8604b03523d756c9175984249243d3b6cc33a70bcf3eab732?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                alt="Additional exhibitor account illustration"
                width={500}
                height={265}
                className="object-contain mt-5 w-full aspect-[1.88] max-md:max-w-full"
              />
            </div>
          </div>

          {/* Right Column - Upload Fields */}
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            {/* Document Upload Section */}
            <section className="flex flex-col w-full max-md:max-w-full">
              <h3 className="text-xl font-bold text-stone-800 mb-4">
                Document Upload
              </h3>
              {/* Mayor's Permit Upload */}
              <FileUpload
                title="Valid Mayor's or Business Permit*"
                description="The maximum file size is 2MB per file. File types accepted are .doc, .docx, .pdf, .png, .jpg, and .jpeg."
                fileTypes=".doc, .docx, .pdf, .png, .jpg, .jpeg"
                maxSize="2MB"
                onChange={handleMayorPermitChange}
              />

              {/* Brand Story Upload or Writeup */}
              <div className="flex flex-col mt-4 w-full font-medium text-stone-800 text-opacity-70 max-md:max-w-full">
                <label className="text-lg leading-loose max-md:max-w-full">
                  Brand story or writeup*
                </label>
                <RadioGroup
                  title=""
                  options={[
                    "Upload brand story or writeup",
                    "Write brand story or writeup",
                  ]}
                  selectedValue={data.brandStoryOption || ""}
                  onChange={(value) => updateData({ brandStoryOption: value })}
                />
                <InputField
                  label=""
                  name="brandStoryWriteup"
                  type="textarea"
                  placeholder="Write your brand story here..."
                  value={data.brandStoryWriteup || ""}
                  onChange={(e) =>
                    updateData({ brandStoryWriteup: e.target.value })
                  }
                  required={false}
                />
              </div>
            </section>

            {/* Product Photos Section */}
            <section className="flex flex-col mt-8 w-full max-md:max-w-full">
              <h3 className="text-xl font-bold text-stone-800 mb-4">
                Product Photos
              </h3>
              <FileUpload
                title="Product Photos"
                description="Upload a minimum of 3 product photos, maximum of 5, and maximum file size of 2MB per photo. File types accepted are .jpg, .jpeg, and .png."
                fileTypes=".jpg, .jpeg, .png"
                maxSize="2MB"
                multiple // Allow multiple file uploads
                onChange={handleProductPhotosChange}
              />
            </section>

            {/* Navigation buttons with scroll functionality */}
            <NavigationButtons
              handlePrev={handlePrev}
              handleNext={handleNext}
              isSubmit={false}
              showPrev={true}
              showNext={true}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Documents;
