import React from 'react';

const EventTags = ({ tags }) => (
    <div className="event-tags">
        {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
        ))}
    </div>
);
export default EventTags;