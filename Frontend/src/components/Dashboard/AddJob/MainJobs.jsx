import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainJobs = () => {
    const [Jobs, setJobs] = useState([]);
    const [newTask, setNewTask] = useState({
        jobTitle: '',
        branch: '',
        experience: '',
        description: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/get');
                const result = await response.json();
                setJobs(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const socket = new WebSocket('ws://localhost:3001');
        socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);

            if (data.newTask) {
                setJobs((prevJobs) => [...prevJobs, data.newTask]);
            } else if (data.updatedTask) {
                setJobs((prevJobs) =>
                    prevJobs.map((task) =>
                        task._id === data.updatedTask._id ? data.updatedTask : task
                    )
                );
            } else if (data.deletedTask) {
                setJobs((prevJobs) => prevJobs.filter((task) => task._id !== data.deletedTask._id));
            }
        });

        return () => {
            socket.close();
        };
    }, []);

    const handleEdit = async (taskId) => {
        const taskToEdit = Jobs.find((task) => task._id === taskId);
        setNewTask({
            jobTitle: taskToEdit.jobTitle,
            branch: taskToEdit.branch,
            experience: taskToEdit.experience,
            description: taskToEdit.description,
        });
    };

    const handleDelete = async (taskId) => {
        try {
            const response = await fetch(`http://localhost:3001/delete/${taskId}`, {
                method: 'DELETE',
            });

            if (response.status === 200) {
                setJobs((prevJobs) => prevJobs.filter((task) => task._id !== taskId));
            } else {
                console.error('Failed to delete task:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const addTask = async () => {
        try {
            const response = await axios.post('http://localhost:3001/add', newTask);

            if (response.status === 201) {
                setJobs((prevJobs) => [...prevJobs, response.data]);
                setNewTask({
                    jobTitle: '',
                    branch: '',
                    experience: '',
                    description: '',
                });
            } else {
                console.error('Failed to add task:', response.statusText);
            }
        } catch (error) {
            if (error.response) {
                console.error('Error response from server:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
                console.error('No response received from server');
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    name=""
                    placeholder="Job Title"
                    value={newTask.jobTitle}
                    onChange={(e) => setNewTask({ ...newTask, jobTitle: e.target.value })}
                />
                <input
                    type="text"
                    name=""
                    placeholder="Branch"
                    value={newTask.branch}
                    onChange={(e) => setNewTask({ ...newTask, branch: e.target.value })}
                />
                <input
                    type="text"
                    name=""
                    placeholder="Experience"
                    value={newTask.experience}
                    onChange={(e) => setNewTask({ ...newTask, experience: e.target.value })}
                />
                <input
                    type="text"
                    name=""
                    placeholder="Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
                <button type="button" onClick={addTask}>
                    Add
                </button>
            </div>
            {Jobs.length === 0 ? (
                <div>No Record</div>
            ) : (
                Jobs.map((task) => (
                    <div key={task._id}>
                        <div>{task.jobTitle}</div>
                        <div>{task.branch}</div>
                        <div>{task.experience}</div>
                        <div>{task.description}</div>
                        <button type="button" onClick={() => handleEdit(task._id)}>
                            Edit
                        </button>
                        <button type="button" onClick={() => handleDelete(task._id)}>
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default MainJobs;
