function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  /* Boşsa ekleme */
  if (taskText === "") return;

  /* Yeni liste elemanı oluştur */
  const li = document.createElement("li");
  li.textContent = taskText;

  /* Görev tıklanınca 'done' sınıfını değiştir */ 
  li.addEventListener("click", function () {
    li.classList.toggle("done");
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
    e.stopPropagation(); /* li tıklamasını tetiklemesin */
    li.remove();
  };

  /* Butonu <li>'ye ekle */
  li.appendChild(delBtn);

  /* <li>'yi listeye ekle */
  document.getElementById("taskList").appendChild(li);

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
  /* Sayfa yüklendiğinde tarihi göster */
    window.onload = function() {
    showCurrent();
};
