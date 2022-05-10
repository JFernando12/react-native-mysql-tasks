const API = "http://localhost:3000/tasks"

export const getTasks = async() => {
    const res = await fetch(API); //Petición a página del backend
    return await res.json();
}

export const getTask = async(id) => {
    const res = await fetch(`${API}/${id}`);
    return await res.json();
}

export const updateTask = async(id, task) => {
    const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    return res;
}

export const saveTask = async (newTask) => {
    const res = await fetch(API, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
    });
    return await res.json();
}

export const deleteTask = async(id) => {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    })
}