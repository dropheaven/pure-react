import React from 'react';
import ReactDOM from 'react-dom';

function Tweet() {
    return (
        <div className="flex border-solid border-2 border-gray-200 max-w-lg mx-auto my-20 pt-4 pb-8 px-4">
            <Avatar img="https://www.gravatar.com/avatar/nothing" />
            <div className="ml-4">
                <Author name="Saad Ahmed" handle="lazyera" />
                <Time hours="5" />
                <Message content="I used to tweet." />
                <div className="mt-4">
                    <Button type="reply" />
                    <Button type="retweet" />
                    <Button type="heart" />
                    <Button type="ellipsis-h" />
                </div>
            </div>
        </div>
    );
}

function Avatar({ img }) {
    return (
        <img 
            alt="avatar"
            className="h-24"
            src={img}
        />
    );
}

function Author({ name, handle }) {
    return(
        <span className="mr-1">
            <span className="font-bold mr-1">{name}</span>
            <span className="text-gray-600 text-sm">@{handle}</span>
        </span>
    );
}

function Time({ hours }) {
    return(
        <span className="text-gray-600 text-sm">
            <span className="text-lg">&middot; </span>
            {hours}h ago
        </span>
    );
}

function Message({ content }) {
    return(
        <div className="my-2">
            { content }
        </div>
    )
}

const Button = ({ type }) => <i className={`fa fa-${type} mr-4`}></i>

ReactDOM.render(
    <Tweet />,
    document.getElementById('root')
);