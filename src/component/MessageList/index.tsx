import { Image, List } from 'antd-mobile'

const MessageList = () => {
    return (
        <List>
            {users.map(user => (
                <List.Item
                    key={user.name}
                    prefix={
                        <Image
                            src={user.avatar}
                            style={{ borderRadius: 20 }}
                            fit='cover'
                            width={40}
                            height={40}
                        />
                    }
                    description={user.description}
                >
                    {user.name}
                </List.Item>
            ))}
        </List>
    )
}
export default MessageList;
const users = [
    {
        avatar:
            'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
    },
]