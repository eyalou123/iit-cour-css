document.addEventListener("DOMContentLoaded", () => {
  let currentLessonIndex = 0;
  let currentChapterIndex = 0;
  let chaptersData = [];

  const lessonList = document.getElementById("lessonList");
  const lessonFrame = document.getElementById("lessonFrame");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  fetch("chapters.json")
    .then((response) => response.json())
    .then((chapters) => {
      chaptersData = chapters;
      populateLessonList(chaptersData);
      loadLesson(currentChapterIndex, currentLessonIndex);
      updateButtons();
    });

  function populateLessonList(chapters) {
    chapters.forEach((chapter, chapterIndex) => {
      const chapterHeader = document.createElement("div");
      chapterHeader.className = "chapter-header";
      chapterHeader.textContent = chapter.title;
      chapterHeader.onclick = () => toggleChapter(chapterIndex);

      const chapterLessons = document.createElement("ul");
      chapterLessons.className = "space-y-2 pl-6 hidden";

      chapter.lessons.forEach((lesson, lessonIndex) => {
        const lessonItem = document.createElement("li");
        lessonItem.textContent = lesson.title;
        lessonItem.className = "lesson-item";
        lessonItem.onclick = () => loadLesson(chapterIndex, lessonIndex);
        chapterLessons.appendChild(lessonItem);
      });

      lessonList.appendChild(chapterHeader);
      lessonList.appendChild(chapterLessons);
    });
  }

  function toggleChapter(chapterIndex) {
    const chapters = lessonList.getElementsByTagName("ul");
    Array.from(chapters).forEach((ul, index) => {
      ul.classList.toggle("hidden", index !== chapterIndex);
    });
  }

  function loadLesson(chapterIndex, lessonIndex) {
    currentChapterIndex = chapterIndex;
    currentLessonIndex = lessonIndex;
    const lesson = chaptersData[chapterIndex].lessons[lessonIndex];
    lessonFrame.src = `lessons/${lesson.url}`;
    updateActiveLesson();
    updateButtons();
  }

  function updateActiveLesson() {
    const chapterLessons = lessonList.getElementsByTagName("ul");
    Array.from(chapterLessons).forEach((ul, i) => {
      const lessons = ul.getElementsByClassName("lesson-item");
      Array.from(lessons).forEach((li, j) => {
        li.classList.toggle(
          "active",
          i === currentChapterIndex && j === currentLessonIndex
        );
      });
    });
  }

  function updateButtons() {
    prevButton.disabled = currentChapterIndex === 0 && currentLessonIndex === 0;
    const lastChapter = currentChapterIndex === chaptersData.length - 1;
    const lastLessonInChapter =
      currentLessonIndex ===
      chaptersData[currentChapterIndex].lessons.length - 1;
    nextButton.disabled = lastChapter && lastLessonInChapter;
  }

  prevButton.onclick = () => {
    if (currentLessonIndex > 0) {
      loadLesson(currentChapterIndex, currentLessonIndex - 1);
    } else if (currentChapterIndex > 0) {
      currentChapterIndex--;
      currentLessonIndex = chaptersData[currentChapterIndex].lessons.length - 1;
      loadLesson(currentChapterIndex, currentLessonIndex);
    }
  };

  nextButton.onclick = () => {
    const currentLessons = chaptersData[currentChapterIndex].lessons;
    if (currentLessonIndex < currentLessons.length - 1) {
      loadLesson(currentChapterIndex, currentLessonIndex + 1);
    } else if (currentChapterIndex < chaptersData.length - 1) {
      currentChapterIndex++;
      currentLessonIndex = 0;
      loadLesson(currentChapterIndex, currentLessonIndex);
    }
  };
});

function adjustIframeHeight(iframe) {
  s = iframe.contentWindow.document.body.scrollHeight;
  iframe.style.height = s + 10 + "px";
}

function loadLesson(url) {
  const iframe = document.getElementById("lessonFrame");
  iframe.src = url;
}

document.addEventListener("DOMContentLoaded", function () {
  const clipboard = new ClipboardJS(".code", {
    text: function (trigger) {
      return document.getElementById("code1").innerText;
    },
  });

  clipboard.on("success", function (e) {
    console.log("Copied:", e.text);
    e.clearSelection();
  });

  clipboard.on("error", function (e) {
    console.error("Copy failed:", e);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const clipboard = new ClipboardJS(".code", {
    text: function (trigger) {
      return document.getElementById("code2").innerText;
    },
  });

  clipboard.on("success", function (e) {
    console.log("Copied:", e.text);
    e.clearSelection();
  });

  clipboard.on("error", function (e) {
    console.error("Copy failed:", e);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const clipboard = new ClipboardJS(".code", {
    text: function (trigger) {
      return document.getElementById("code3").innerText;
    },
  });

  clipboard.on("success", function (e) {
    console.log("Copied:", e.text);
    e.clearSelection();
  });

  clipboard.on("error", function (e) {
    console.error("Copy failed:", e);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const clipboard = new ClipboardJS(".code", {
    text: function (trigger) {
      return document.getElementById("code4").innerText;
    },
  });

  clipboard.on("success", function (e) {
    console.log("Copied:", e.text);
    e.clearSelection();
  });

  clipboard.on("error", function (e) {
    console.error("Copy failed:", e);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const clipboard = new ClipboardJS(".code", {
    text: function (trigger) {
      return document.getElementById("code5").innerText;
    },
  });

  clipboard.on("success", function (e) {
    console.log("Copied:", e.text);
    e.clearSelection();
  });

  clipboard.on("error", function (e) {
    console.error("Copy failed:", e);
  });
});
