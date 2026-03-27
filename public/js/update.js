document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('editInput');
  const deleteBtn = document.getElementById('deleteBtn');
  
  if (nameInput && deleteBtn) {
    const originalValue = nameInput.value;
    
    function checkAndDisableDelete() {
      if (nameInput.value !== originalValue) {
        deleteBtn.disabled = true;
        console.log('Имя изменено, кнопка Удалить заблокирована');
      } else {
        deleteBtn.disabled = false;
        console.log('Имя восстановлено, кнопка Удалить разблокирована');
      }
    }
    
    nameInput.addEventListener('input', checkAndDisableDelete);
    
    const deleteForm = document.getElementById('deleteForm');
    if (deleteForm) {
      deleteForm.addEventListener('submit', function(event) {
        if (deleteBtn.disabled) {
          event.preventDefault();
          alert('Нельзя удалить контакт во время редактирования');
        }
      });
    }
    

    nameInput.addEventListener('blur', checkAndDisableDelete);
  } else {
    console.log('Элементы не найдены на странице');
  }
});