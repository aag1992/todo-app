import React, { useContext, useState, useEffect } from 'react';
import { Priority } from '../models/Priority';
import {Card, Button} from "antd";

import { DeleteOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Todo } from '../models/Todo';
import TodoCard from './Todo';

interface TodoListProps {todos: Todo[]}



const TodoList = ({todos}: TodoListProps) => {
    return <div style={{display: 'flex'}}>
        {todos.map((todo,index) => (
            <TodoCard key={index} {...todo}/>
        ))}
    </div>

}

export default TodoList