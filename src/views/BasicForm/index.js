import React from "react"
import {
    Form,
    Input,
    Tooltip,
    Select,
    Radio,
    Checkbox,
    DatePicker,
    Button,
    Row,
    Col
} from "antd"
import {QuestionCircleOutlined} from "@ant-design/icons"

const {Option} = Select
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 20,
        },
    },
}
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
}

const BasicForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        const val = {
            ...values,
            'date': values['date'].format('YYYY-MM-DD'),
        };
        console.log('Received values of form: ', val);
    };

    return (
        <Form
            style={{ width:"800px",margin:"50px auto 0" }}
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                title: "asd",
            }}
            scrollToFirstError>
            <Form.Item
                name="title"
                label="标题"
                rules={[
                    {
                        required: true,
                        message: '标题不能空!',
                    }
                ]}>
                <Input/>
            </Form.Item>
            <Form.Item
                name="content"
                label="描述"
                rules={[
                    {
                        required: true,
                        message: '描述不能空!',
                    }
                ]}>
                <Input.TextArea rows={4}/>
            </Form.Item>
            <Form.Item
                name="date"
                label="日期"
                rules={[
                    {
                        required: true,
                        message: '日期不能空!',
                    }
                ]}>
                <DatePicker />
            </Form.Item>
            <Form.Item
                name="nickname"
                label={
                    <span>名称&nbsp;<Tooltip title="这是什么?"><QuestionCircleOutlined/></Tooltip></span>
                }
                rules={[
                    {
                        required: true,
                        message: '请输入名称!',
                        whitespace: true,
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item name="select" label="下拉">
                <Select placeholder="请选择">
                    <Option value="a">a</Option>
                    <Option value="b">b</Option>
                    <Option value="c">c</Option>
                </Select>
            </Form.Item>
            <Form.Item name="radio" label="单选">
                <Radio.Group>
                    <Radio value="a">item 1</Radio>
                    <Radio value="b">item 2</Radio>
                    <Radio value="c">item 3</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="checkbox" label="多选">
                <Checkbox.Group>
                    <Row>
                        <Col span={8}>
                            <Checkbox value="A" style={{ lineHeight: '32px' }}>A</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>B</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="C" style={{ lineHeight: '32px' }}>C</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="D" style={{ lineHeight: '32px' }}>D</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="E" style={{ lineHeight: '32px' }}>E</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="F" style={{ lineHeight: '32px' }}>F</Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">提交</Button>
            </Form.Item>
        </Form>
    )
}

export default BasicForm