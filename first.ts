interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const zerocho: Profile = {
  name: 'zerocho',
  age: 29,
  married: false,
};

type P<T, S extends keyof T> = {
  [Key in S]: T[Key];
};

type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;

const newZerocho: O<Profile, 'married'> = {
  name: 'zerocho',
  age: 29,
};
