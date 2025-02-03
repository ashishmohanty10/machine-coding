import { TabComponentProps } from "../types/types";

export const Interest = ({ data, setData, errors }: TabComponentProps) => {
  const { interests } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i: string) => i !== e.target.name),
    }));
  };

  console.log(interests);

  return (
    <div>
      <div>
        <label htmlFor="interests">Coding</label>
        <input
          type="checkbox"
          name="coding"
          onChange={handleChange}
          checked={interests.includes("coding")}
        />
      </div>
      <div>
        <label htmlFor="interests">Music</label>
        <input
          type="checkbox"
          name="music"
          onChange={handleChange}
          checked={interests.includes("music")}
        />

        {errors.interests && <span className="error">{errors.interests}</span>}
      </div>
    </div>
  );
};
