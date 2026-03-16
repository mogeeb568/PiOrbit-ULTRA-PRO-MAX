// Tasks configuration
const TASKS = [
    { name: "🔐 Login Daily", points: 5 },
    { name: "📊 Check Dashboard", points: 5 },
    { name: "👥 Invite Friend", points: 10 },
    { name: "💬 Join Pi Chat", points: 5 },
    { name: "📱 Share App", points: 5 },
    { name: "⭐ Complete Profile", points: 10 }
];

// Initialize tasks
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';
    
    TASKS.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span>${task.name}</span>
                <span style="color: #ffd700;">+${task.points} pts</span>
            </div>
        `;
        
        li.onclick = () => completeTask(task);
        taskList.appendChild(li);
    });
}

function completeTask(task) {
    addPoints(task.points);
    
    // Show success message
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4ade80;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        animation: slideIn 0.3s ease;
    `;
    notification.innerText = `✅ +${task.points} points!`;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 2000);
}