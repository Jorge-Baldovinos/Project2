const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#routine-name').value.trim();
  const needed_routine = document.querySelector('#routine-date').value.trim();
  const description = document.querySelector('#routine-desc').value.trim();

  if (name && needed_routine && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_routine, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete routine');
    }
  }
};

document
  .querySelector('.new-routine-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.routine-list')
  .addEventListener('click', delButtonHandler);
