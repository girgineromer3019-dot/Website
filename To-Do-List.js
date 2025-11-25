/* -------------------------------------------------
   LOCAL STORAGE İÇİN GEREKLİ DEĞİŞKENLER
---------------------------------------------------*/
let tasks = [];


/* -------------------------------------------------
   LOCAL STORAGE KAYDETME FONKSİYONU
---------------------------------------------------*/
function saveTasks() {
  localStorage.setItem("todoData", JSON.stringify(tasks));
}


/* -------------------------------------------------
   LOCAL STORAGE'DAN YÜKLEME FONKSİYONU
---------------------------------------------------*/
function loadTasks() {
  const data = localStorage.getItem("todoData");
  if (data) {
    tasks = JSON.parse(data);
  }
  renderTasks();
}


/* -------------------------------------------------
   LİSTEYİ EKRANA ÇİZME FONKSİYONU
---------------------------------------------------*/
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) li.classList.add("done");

    /* Görev tıklanınca 'done' sınıfını değiştir */
    li.addEventListener("click", function () {
      task.done = !task.done;
      saveTasks();
      renderTasks();
    });

    /* Silme butonu oluştur */
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";
    delBtn.style.padding = "3px 6px";
    delBtn.style.fontSize = "12px";
    delBtn.style.cursor = "pointer";

    /* Silme işlemi */
    delBtn.onclick = function (e) {
      e.stopPropagation();
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      renderTasks();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}



/* -------------------------------------------------
   addTask FONKSİYONUN
---------------------------------------------------*/
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  /* Boşsa ekleme */
  if (taskText === "") return;

  /* Yeni görev objesi */
  const taskObj = {
    id: Date.now(),
    text: taskText,
    done: false
  };

  tasks.push(taskObj);
  saveTasks();
  renderTasks();

  /* Girdi kutusunu temizle */
  input.value = "";
}

/* Enter tuşuna basınca görev ekle */
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

/* Geçerli tarihi göster */
function showCurrent() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    };  

  /* Tamamen İngilizce tarih için 'en-US' kullanın */
  /* Türkçe tarih için 'tr-TR' kullanın */
  /* Hollanda dili için 'nl-NL' kullanın */
  document.getElementById('currentDate').textContent =
    now.toLocaleDateString('nl-NL', options);
} 
showCurrent();

/* Sayfa yüklendiğinde tarihi göster + LOCALSTORAGE YÜKLEME */
window.onload = function() {
  loadTasks();
  showCurrent();
};
