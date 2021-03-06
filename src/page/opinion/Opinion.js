import React, {Component} from 'react';
import QuestionImg from '../../assets/img/siji_question.jpg';
import {Rate, Form, Button, Input, message} from 'antd';
import {submitOpinion} from '../../api/opinion';
import './style.less';

// const pageTitle = {
//   icon: '\ue63b',
//   title: '意见箱'
// };

const {TextArea} = Input;

class Opinion extends Component {

  formRef = React.createRef();

  onFinish = async value => {
    const result = await submitOpinion(value);
    const data = result.data;
    console.log(data);
    if (data.code == 0) {
      message.success('提交成功');
      this.formRef.current.resetFields();
    } else {
      message.error('服务器异常,提交失败');
    }
  };


  render() {
    return (
      <div className='opinion-wrapper'>
        <div className='opinion-container'>
          <div className='opinion-img'>
            <img src={QuestionImg} alt='问卷调查'/>
          </div>
          <div className='opinion-card'>
            <div className='t-opinion-card'>
              <span className='t-opinion-card-item'>四季惠享,会做更好！</span>
            </div>
            <div className='opinion-card-form'>
              <Form
                onFinish={this.onFinish}
                initialValues={{score: 4.5}}
                ref={this.formRef}
              >
                <Form.Item
                  name='comment'
                >
                  <TextArea
                    placeholder="欢迎您留下宝贵建议及意见,我们会认真听取您的想法,努力改进,变得更好!"
                    autoSize={{minRows: 6, maxRows: 10}}
                  />
                </Form.Item>
                <div className='rate-wrapper'>
                  <div className='opinion-rate'>服务评价:</div>
                  <Form.Item name="score">
                    <Rate/>
                  </Form.Item>
                </div>

                <Form.Item>
                  <Button className='opinion-btn' type="primary" htmlType="submit">提交</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Opinion;
