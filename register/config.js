// config.js
//
// Заполните эти значения перед публикацией сайта.
// ВАЖНО: GITHUB_TOKEN будет виден всем в открытом виде (в исходном коде страницы).
// Используйте fine-grained token, выданный ТОЛЬКО на этот репозиторий,
// с правом только "Contents: Read and write". Ничего более широкого сюда не кладите.

window.APP_CONFIG = {
  // Логин владельца репозитория, например "ivan-petrov"
  GITHUB_OWNER: "formyps42022-bot",

  // Имя репозитория, например "lm-inc-levels"
  GITHUB_REPO: "fjfdjfjsddjf",

  // Ветка, в которую пишем (обычно "main")
  GITHUB_BRANCH: "main",

  // Путь к файлу с анкетами регистрации внутри репозитория
  REGISTRATIONS_PATH: "registrations.txt",

  // Путь к файлу с таблицей рейтинга (тот же, что использует index.html)
  DATA_PATH: "data.json",

  // Fine-grained Personal Access Token с правом Contents: Read and write
  // ТОЛЬКО для этого репозитория. См. README.md, раздел "Как создать токен".
  GITHUB_TOKEN: "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",
};
