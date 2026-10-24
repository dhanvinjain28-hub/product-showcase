type Props = {
  name: string;
};

export default function Greeting({ name }: Props) {
  return <h2>Welcome back, {name}!</h2>;
}