import {
  Button,
  Input,
  Loader,
} from "../components/ui";

function ComponentDemo() {
  return (
    <div className="p-8 space-y-6">

      <h1 className="text-3xl font-bold">
        Component Library Demo
      </h1>

      <Button>
        Primary Button
      </Button>

      <Input
        placeholder="Demo Input"
      />

      <Loader />

    </div>
  );
}

export default ComponentDemo;