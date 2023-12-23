import React, { useState } from 'react';
import axios from 'axios';

const CreateTodo = ({ onAdd }) => {
    const [jobTitle, setJobTitle] = useState('');
    const [branch, setBranch] = useState('');
    const [experience, setExperience] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const handleAdd = () => {
        axios
            .post('http://localhost:3001/add', { jobTitle, branch, experience, description })
            .then((result) => {
                if (result.data.error) {
                    setError(result.data.error);
                } else {
                    setError(null);
                    // Clear input fields
                    setJobTitle('');
                    setBranch('');
                    setExperience('');
                    setDescription('');
                    // Notify parent component about the task addition
                    if (onAdd) {
                        onAdd();
                    }
                }
            })
            .catch((err) => {
                console.error('Error adding task:', err);
                setError('Failed to add task. Please try again.');
            });
    };

    return (
        <div>
            <input
                type="text"
                name=""
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
            />
            <input
                type="text"
                name=""
                placeholder="Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
            />
            <input
                type="text"
                name=""
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
            />
            <input
                type="text"
                name=""
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="button" onClick={handleAdd}>
                Add
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default CreateTodo;
