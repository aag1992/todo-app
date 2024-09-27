import React, { useContext, useState, useEffect } from 'react';
import { Priority } from '../models/Priority';
import {Card, Button} from "antd";

import { DeleteOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Todo  } from '../models/Todo';

const { Meta } = Card;




const StyledCard = styled(Card)`
  margin-top: 1em;
  margin-bottom: 1em;
  background-color: white;
  margin: 10px;
  font-size: 0.9rem; 
  line-height: 1.1rem;
`;

const TodoCard = (props: Todo  ) => {

    return <StyledCard
    hoverable
    style={{ width: 240 }}
    actions={[
        <Button danger={true} icon={<DeleteOutlined />} onClick={() => {console.log("Deleting")}}/>
    ]
    }
  >
    <Meta title={props.text} description={props.description} />

  </StyledCard>


}

export default TodoCard;