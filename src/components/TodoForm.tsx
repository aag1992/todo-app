import { Button, Form, Input, Space, Select } from "antd";
import styled from '@emotion/styled';
import { Todo } from "../models/Todo";
import { Priority } from '../models/Priority';
import { Status } from '../models/TodoStatus';

const StyledForm = styled(Form)`
  padding: 10px;
  background-color: white;
  line-height: 1.1rem;
`;

const { Option } = Select;

interface TodoFormProps {
  addNewTodos: (todo: Todo) => void;
}

const TodoForm = ({ addNewTodos }: TodoFormProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const newTodo: Todo = {
      text: values.text,
      priority: values.priority,
      description: values.description,
      status: values.status,
    };
    debugger

    addNewTodos(newTodo);

    form.resetFields();
  };

  return (
    <StyledForm
      form={form}
      name="todo-form"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      {/* Text Field */}
      <Form.Item
        name="text"
        label="Text"
        rules={[{ required: true, message: 'Please input the task text!' }]}
      >
        <Input />
      </Form.Item>

      {/* Description Field */}
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please input the task description!' }]}
      >
        <Input />
      </Form.Item>

      {/* Priority Field */}
      <Form.Item
        name="priority"
        label="Priority"
        rules={[{ required: true, message: 'Please select the priority!' }]}
      >
        <Select placeholder="Select priority">
          <Option value={Priority.HIGH}>High</Option>
          <Option value={Priority.REGULAR}>Regular</Option>
          <Option value={Priority.LOW}>Low</Option>
        </Select>
      </Form.Item>

      {/* Status Field */}
      <Form.Item
        name="status"
        label="Status"
        rules={[{ required: true, message: 'Please select the status!' }]}
      >
        <Select placeholder="Select status">
          <Option value={Status.COMPLETED}>Completed</Option>
          <Option value={Status.IN_PROGRESS}>In Progress</Option>
          <Option value={Status.WAITING}>To Do</Option>
        </Select>
      </Form.Item>

      {/* Submit and Reset Buttons */}
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </StyledForm>
  );
};

export default TodoForm;
