import {Tag} from 'antd'

function Tags({category, tags}) {
    return ( 
        <div className="tags">
            <Tag color='magenta'>{category}</Tag>
            {tags.map(tag => <Tag key={Math.random() * 1000} color='#2db7f5'>{tag}</Tag>)}
        </div>
     );
}

export default Tags;