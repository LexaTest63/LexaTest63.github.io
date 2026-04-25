fetch('poems.json')
    .then(response => response.json())
    .then(poems => {
        const container = document.getElementById('poemsContainer');
        poems.forEach(poem => {
            const card = document.createElement('div');
            card.className = 'poem-card';
            card.innerHTML = `
                <h3>${poem.title}</h3>
                <pre>${poem.text}</pre>
                <small>${poem.date} • ${poem.tags.join(', ')}</small>
            `;
            container.appendChild(card);
        });
    });