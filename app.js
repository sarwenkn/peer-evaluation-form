const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvaGdybG1naGx1eWZjc3BmZmVwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzQzNTUwNiwiZXhwIjoyMDc5MDExNTA2fQ.RibgBHCrQf3Cc4ylboZmEun2oJMd3xyHSuJqTFEVJZI';

const peers = [
    { name: 'Amirul Safuan Bin Ali', image: 'images/Amirul_Safuan_Bin_Ali.png' },
    { name: 'Ashweena Sundar', image: 'images/Ashweena_Sundar.png' },
    { name: 'Fatin Binti Ahmad Khuduri', image: 'images/Fatin_Binti_Ahmad_Khuduri.png' },
    { name: 'Henry Angala', image: 'images/Henry_Angala.png' },
    { name: "Izzah 'Atirah Binti Salman", image: "images/IZZAH_'ATIRAH_BINTI_SALMAN.png" },
    { name: 'Kalaivani A/P Ramani', image: 'images/Kalaivani_Ramani.png' },
    { name: 'Kesshor', image: 'images/Kesshor.png' },
    { name: 'Muhammad Aiman Bin Mohd Asri', image: 'images/Muhammad_Aiman_Bin_Mohd_Asri.png' },
    { name: 'Muhammad Aiman Bin Othman', image: 'images/Muhammad_Aiman_Bin_Othman.png' },
    { name: 'Muhammad Al Mukhris Bin Gasfar', image: 'images/Muhammad_Al_Mukhris_Bin_Gasfar.png' },
    { name: 'Muhammad Anas Bin Rosli', image: 'images/MUHAMMAD_ANAS_BIN_ROSLI.png' },
    { name: 'Muhammad Fakhrul Hafeez Bin Mohd Fauzi', image: 'images/MUHAMMAD_FAKHRUL_HAFEEZ_BIN_MOHD_FAUZI.png' },
    { name: 'Muhammad Hafizin Zarif Bin Mohd Zahid', image: 'images/MUHAMMAD_HAFIZIN_ZARIF_BIN_MOHD_ZAHID.png' },
    { name: 'Muhammad Imtiaaz Syaqib Bin Adanan', image: 'images/Muhammad_Imtiaaz_Syaqib_Bin_Adanan.png' },
    { name: 'Muhammad Syuhaiman Bin Shaari', image: 'images/MUHAMMAD_SYUHAIMAN_BIN_SHAARI.png' },
    { name: 'Muhamad Amirul Hakim Bin Mohamad Imran', image: 'images/Mohamad_Amirul_Hakim_Bin_Mohamad_Imran.png' },
    { name: 'Muhammad Arif Hakimi Bin Ramlee', image: 'images/Muhammad_Arif_Hakimi_bin_Ramlee.png' },
    { name: 'Muhajid Bin Ismail', image: 'images/Mujahid_Bin_Ismail.png' },
    { name: 'Nor Athirah Hanim Binti Norizan', image: 'images/NOR_ATHIRAH_HANIM_BINTI_NORIZAN.png' },
    { name: 'Nur Fazlen Idayu Binti Jaharuddin', image: 'images/Nur_Fazlen_Idayu_Binti_Jaharuddin.png' },
    { name: 'Phua Huaysze (Coco)', image: 'images/Phua_Huaysze(Coco).png' },
    { name: 'Pratosh A/L Kannadasan', image: 'images/Pratosh_Kannadasan.png' },
    { name: 'Sarwen Kumar Naidu', image: 'images/Sarwen_Kumar_Naidu_Kumrasen.png' },
    { name: 'Siti Hana Quzaima Binti Alias', image: 'images/Siti_Hana_Quzaima_binti_Alias.png' },
    { name: 'Siti Nur Annisa', image: 'images/SITI_NUR_ANNISA.png' },
    { name: 'Yeow Zan Leng', image: 'images/Yeow_Zan_Leng.png' },
];

const questions = [
    { category: 'Competency & Capability', number: 1, text: 'Demonstrates the required job knowledge and skills to perform their role effectively.' },
    { category: 'Competency & Capability', number: 2, text: 'Applies sound judgment and problem-solving skills when handling work-related challenges.' },
    { category: 'Competency & Capability', number: 3, text: 'Delivers work that is accurate, thorough, and meets expected quality standards.' },
    { category: 'Visibility & Work Delivery', number: 4, text: 'Communicates progress clearly and makes work contributions visible to stakeholders.' },
    { category: 'Visibility & Work Delivery', number: 5, text: 'Takes accountability and ownership of assigned tasks and commitments.' },
    { category: 'Visibility & Work Delivery', number: 6, text: 'Delivers work within agreed timelines or proactively communicates delays.' },
    { category: 'Work-Related Support', number: 7, text: 'Is responsive and available when support or input is required.' },
    { category: 'Work-Related Support', number: 8, text: 'Provides reliable and timely support that helps others complete their work effectively.' },
    { category: 'Teamwork & Collaboration', number: 9, text: 'Works collaboratively with others and contributes positively to team outcomes.' },
    { category: 'Teamwork & Collaboration', number: 10, text: 'Communicates clearly, respectfully, and professionally with team members.' },
    { category: 'Teamwork & Collaboration', number: 11, text: 'Can be trusted to follow through and act in the best interest of the team.' },
    { category: 'Overall Assessment', number: 12, text: "Overall, how would you rate this employee's contribution as a team member?" },
];

function getInitials(name) {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join('');
}

function createPeerCard(peer, question) {
    const label = document.createElement('label');
    label.className = 'peer-card';
    label.setAttribute('for', `rating-${question.number}-${peer.name}`);

    const avatarButton = document.createElement('button');
    avatarButton.type = 'button';
    avatarButton.className = 'avatar-button';
    avatarButton.title = 'Click to enlarge photo';

    const avatar = document.createElement('div');
    avatar.className = 'peer-avatar';

    if (peer.image) {
        const img = document.createElement('img');
        img.src = peer.image;
        img.alt = peer.name;
        avatar.appendChild(img);
        avatarButton.dataset.image = peer.image;
    } else {
        const placeholder = document.createElement('span');
        placeholder.className = 'peer-initials';
        placeholder.textContent = getInitials(peer.name);
        avatar.appendChild(placeholder);
        avatarButton.dataset.initials = getInitials(peer.name);
    }
    avatarButton.dataset.name = peer.name;
    avatarButton.appendChild(avatar);

    const name = document.createElement('div');
    name.className = 'peer-name';
    name.textContent = peer.name;

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';

    const input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.max = '5';
    input.step = '1';
    input.inputMode = 'numeric';
    input.placeholder = '1-5';
    input.name = `rating-${question.number}-${peer.name}`;
    input.id = `rating-${question.number}-${peer.name}`;
    input.addEventListener('input', () => {
        const value = Number(input.value);
        if (Number.isNaN(value)) return;
        if (value > 5) input.value = '5';
        if (value < 1) input.value = '1';
    });

    avatarButton.addEventListener('click', () => {
        openAvatarModal(avatarButton.dataset.image, avatarButton.dataset.name, avatarButton.dataset.initials);
    });

    inputWrapper.appendChild(input);

    label.appendChild(avatarButton);
    label.appendChild(name);
    label.appendChild(inputWrapper);

    return label;
}

function populateQuestions() {
    const container = document.getElementById('questions');
    container.innerHTML = '';

    questions.forEach((q) => {
        const section = document.createElement('section');
        section.className = 'question-card';

        const header = document.createElement('div');
        header.className = 'question-header';

        const category = document.createElement('div');
        category.className = 'question-category';
        category.textContent = q.category;

        const title = document.createElement('div');
        title.className = 'question-title';
        title.innerHTML = `<span class="question-number">Q${q.number}</span> ${q.text}`;

        header.appendChild(category);
        header.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'peer-grid';

        peers.forEach((peer) => {
            grid.appendChild(createPeerCard(peer, q));
        });

        section.appendChild(header);
        section.appendChild(grid);

        container.appendChild(section);
    });
}

document.getElementById('peerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const ratings = [];
    const missing = [];

    // clear previous error states
    document.querySelectorAll('.input-error').forEach((el) => el.classList.remove('input-error'));

    questions.forEach((q) => {
        peers.forEach((peer) => {
            const ratingInput = document.querySelector(`input[name="rating-${q.number}-${peer.name}"]`);
            if (!ratingInput || ratingInput.value === '') {
                missing.push({ question: q.number, peer: peer.name, input: ratingInput });
                if (ratingInput) ratingInput.classList.add('input-error');
                return;
            }

            const value = Number(ratingInput.value);
            if (Number.isNaN(value) || value < 1 || value > 5) {
                missing.push({ question: q.number, peer: peer.name, input: ratingInput });
                ratingInput.classList.add('input-error');
                return;
            }

            ratings.push({
                peer_name: peer.name,
                rater_name: 'Anonymous',
                category: q.category,
                question_number: q.number,
                rating: ratingInput.value,
            });
        });
    });

    if (missing.length > 0) {
        const first = missing[0];
        if (first.input) first.input.focus();
        alert(`Please enter a rating (1-5) for all peers. Missing example: Q${first.question} for ${first.peer}.`);
        return;
    }

    const response = await fetch('https://bohgrlmghluyfcspffep.supabase.co/rest/v1/peer_ratings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            apikey: SUPABASE_SERVICE_KEY,
            Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
            Prefer: 'return=minimal',
        },
        body: JSON.stringify(ratings),
    });

    if (response.ok) {
        alert('Ratings submitted successfully');
    } else {
        const errorText = await response.text();
        console.error('Supabase error:', errorText);
        alert('Error submitting ratings');
    }
});

const modal = document.getElementById('avatarModal');
const modalImg = document.getElementById('modalImage');
const modalInitials = document.getElementById('modalInitials');
const modalName = document.getElementById('modalName');

function openAvatarModal(imageSrc, name, initials) {
    if (imageSrc) {
        modalImg.src = imageSrc;
        modalImg.alt = name;
        modalImg.classList.remove('hidden');
        modalInitials.classList.add('hidden');
    } else {
        modalImg.src = '';
        modalImg.classList.add('hidden');
        modalInitials.textContent = initials || '';
        modalInitials.classList.remove('hidden');
    }
    modalName.textContent = name || '';
    modal.classList.add('show');
}

function closeAvatarModal() {
    modal.classList.remove('show');
}

document.getElementById('modalClose').addEventListener('click', closeAvatarModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeAvatarModal();
    }
});

window.onload = populateQuestions;
