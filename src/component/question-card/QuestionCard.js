import React, {Component} from 'react';
import {Collapse, Tag} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';
import './style.less';

const {Panel} = Collapse;

const symbol = `Q & A :`;

const text = `
  公益机构不收费公益机构不收费
`;

class QuestionCard extends Component {
  render() {

    const {questionContent, questionTitle} = this.props;

    return (
      <div className='q-card-wrapper'>
        <Collapse
          bordered={false}
          expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}
          className="q-collapse site-collapse-custom-collapse"
        >
          <Panel header={questionTitle + '?'} key="1" className="site-collapse-custom-panel">

            <p><Tag color="blue">{symbol}</Tag>{questionContent}</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default QuestionCard;
