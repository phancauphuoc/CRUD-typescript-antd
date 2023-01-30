import React from 'react'
import { Descriptions, Modal } from 'antd';

const ModalView: React.FC<{
    isModalVisible: boolean,
    setIsModalVisible: (value: boolean) => void,
    dataDetail: any
}> = ({ isModalVisible, setIsModalVisible, dataDetail }) => {
    if (!isModalVisible) return <></>
    console.log('eee', dataDetail);
    return (
        <Modal
            title='Member Info'
            open={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            onOk={() => setIsModalVisible(false)}
            width={1200}
        >
            <Descriptions>
                <Descriptions.Item label="ID">
                    {dataDetail?.id}
                </Descriptions.Item>
                <Descriptions.Item label="Name">
                    {dataDetail?.Name}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                    {dataDetail?.Status ? 'Male' : 'Female'}
                </Descriptions.Item>
                <Descriptions.Item label="Published At">
                    {new Date(dataDetail?.Published_At * 1000).toLocaleDateString()}
                </Descriptions.Item>
                <Descriptions.Item label="Create At">
                    {new Date(dataDetail?.Create_At * 1000).toLocaleDateString()}
                </Descriptions.Item>
            </Descriptions>
        </Modal>
    )
}

export default ModalView