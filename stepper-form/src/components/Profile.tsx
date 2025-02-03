import { TabComponentProps, UserData } from "../types/types";

export const Profile = ({ data, setData, errors }: TabComponentProps) => {
  const { name, email, age } = data;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: keyof UserData
  ) => {
    setData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          min={18}
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          min={18}
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};
