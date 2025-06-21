// 전세계 국가와 수도 데이터 (유명한 도시들 포함)
const countries = [
    {name: "대한민국", capital: "서울", flag: "🇰🇷", cities: ["서울", "부산", "인천", "대구"]},
    {name: "프랑스", capital: "파리", flag: "🇫🇷", cities: ["파리", "마르세유", "리옹", "툴루즈"]},
    {name: "브라질", capital: "브라질리아", flag: "🇧🇷", cities: ["브라질리아", "상파울루", "리우데자네이루", "살바도르"]},
    {name: "호주", capital: "캔버라", flag: "🇦🇺", cities: ["시드니", "캔버라", "멜버른", "브리즈번"]},
    {name: "일본", capital: "도쿄", flag: "🇯🇵", cities: ["도쿄", "교토", "오사카", "나고야"]},
    {name: "중국", capital: "베이징", flag: "🇨🇳", cities: ["베이징", "상하이", "광저우", "선전"]},
    {name: "미국", capital: "워싱턴 D.C.", flag: "🇺🇸", cities: ["워싱턴 D.C.", "뉴욕", "로스앤젤레스", "시카고"]},
    {name: "영국", capital: "런던", flag: "🇬🇧", cities: ["런던", "맨체스터", "버밍엄", "리버풀"]},
    {name: "독일", capital: "베를린", flag: "🇩🇪", cities: ["베를린", "뮌헨", "함부르크", "쾰른"]},
    {name: "이탈리아", capital: "로마", flag: "🇮🇹", cities: ["로마", "밀라노", "나폴리", "토리노"]},
    {name: "스페인", capital: "마드리드", flag: "🇪🇸", cities: ["마드리드", "바르셀로나", "발렌시아", "세비야"]},
    {name: "러시아", capital: "모스크바", flag: "🇷🇺", cities: ["모스크바", "상트페테르부르크", "노보시비르스크", "예카테린부르크"]},
    {name: "인도", capital: "뉴델리", flag: "🇮🇳", cities: ["뉴델리", "뭄바이", "콜카타", "방갈로르"]},
    {name: "캐나다", capital: "오타와", flag: "🇨🇦", cities: ["오타와", "토론토", "몬트리올", "밴쿠버"]},
    {name: "멕시코", capital: "멕시코시티", flag: "🇲🇽", cities: ["멕시코시티", "과달라하라", "몬테레이", "푸에블라"]},
    {name: "아르헨티나", capital: "부에노스아이레스", flag: "🇦🇷", cities: ["부에노스아이레스", "코르도바", "로사리오", "멘도사"]},
    {name: "이집트", capital: "카이로", flag: "🇪🇬", cities: ["카이로", "알렉산드리아", "기자", "수에즈"]},
    {name: "남아프리카공화국", capital: "프리토리아", flag: "🇿🇦", cities: ["프리토리아", "요하네스버그", "케이프타운", "더반"]},
    {name: "태국", capital: "방콕", flag: "🇹🇭", cities: ["방콕", "치앙마이", "파타야", "푸켓"]},
    {name: "베트남", capital: "하노이", flag: "🇻🇳", cities: ["하노이", "호치민시", "다낭", "하이퐁"]},
    {name: "인도네시아", capital: "자카르타", flag: "🇮🇩", cities: ["자카르타", "수라바야", "반둥", "메단"]},
    {name: "터키", capital: "앙카라", flag: "🇹🇷", cities: ["앙카라", "이스탄불", "이즈미르", "부르사"]},
    {name: "그리스", capital: "아테네", flag: "🇬🇷", cities: ["아테네", "테살로니키", "파트라", "이라클리오"]},
    {name: "네덜란드", capital: "암스테르담", flag: "🇳🇱", cities: ["암스테르담", "로테르담", "헤이그", "위트레흐트"]},
    {name: "벨기에", capital: "브뤼셀", flag: "🇧🇪", cities: ["브뤼셀", "안트베르펜", "겐트", "브뤼헤"]},
    {name: "스위스", capital: "베른", flag: "🇨🇭", cities: ["베른", "취리히", "제네바", "바젤"]},
    {name: "스웨덴", capital: "스톡홀름", flag: "🇸🇪", cities: ["스톡홀름", "예테보리", "말뫼", "웁살라"]},
    {name: "노르웨이", capital: "오슬로", flag: "🇳🇴", cities: ["오슬로", "베르겐", "트론헤임", "스타방에르"]},
    {name: "덴마크", capital: "코펜하겐", flag: "🇩🇰", cities: ["코펜하겐", "오르후스", "오덴세", "올보르"]},
    {name: "핀란드", capital: "헬싱키", flag: "🇫🇮", cities: ["헬싱키", "에스포", "탐페레", "반타"]},
    {name: "나이지리아", capital: "아부자", flag: "🇳🇬", cities: ["아부자", "라고스", "카노", "이바단"]},
    {name: "뉴질랜드", capital: "웰링턴", flag: "🇳🇿", cities: ["웰링턴", "오클랜드", "크라이스트처치", "해밀턴"]},
    {name: "오스트리아", capital: "비엔나", flag: "🇦🇹", cities: ["비엔나", "그라츠", "린츠", "잘츠부르크"]},
    {name: "칠레", capital: "산티아고", flag: "🇨🇱", cities: ["산티아고", "발파라이소", "콘셉시온", "안토파가스타"]},
    {name: "콜롬비아", capital: "보고타", flag: "🇨🇴", cities: ["보고타", "메데인", "칼리", "바랑키야"]},
    {name: "체코", capital: "프라하", flag: "🇨🇿", cities: ["프라하", "브르노", "오스트라바", "플젠"]},
    {name: "헝가리", capital: "부다페스트", flag: "🇭🇺", cities: ["부다페스트", "데브레첸", "세게드", "미슈콜츠"]},
    {name: "아이슬란드", capital: "레이캬비크", flag: "🇮🇸", cities: ["레이캬비크", "코파보귀르", "하프나르피외르뒤르", "아퀴레이리"]},
    {name: "아일랜드", capital: "더블린", flag: "🇮🇪", cities: ["더블린", "코크", "리머릭", "골웨이"]},
    {name: "카자흐스탄", capital: "아스타나", flag: "🇰🇿", cities: ["아스타나", "알마티", "쉼켄트", "카라간다"]},
    {name: "케냐", capital: "나이로비", flag: "🇰🇪", cities: ["나이로비", "몸바사", "키수무", "나쿠루"]},
    {name: "말레이시아", capital: "쿠알라룸푸르", flag: "🇲🇾", cities: ["쿠알라룸푸르", "조지타운", "이포", "조호르바루"]},
    {name: "모로코", capital: "라바트", flag: "🇲🇦", cities: ["라바트", "카사블랑카", "페스", "마라케시"]},
    {name: "페루", capital: "리마", flag: "🇵🇪", cities: ["리마", "아레키파", "트루히요", "치클라요"]},
    {name: "필리핀", capital: "마닐라", flag: "🇵🇭", cities: ["마닐라", "퀘존시티", "다바오", "세부"]},
    {name: "폴란드", capital: "바르샤바", flag: "🇵🇱", cities: ["바르샤바", "크라쿠프", "우치", "브로츠와프"]},
    {name: "포르투갈", capital: "리스본", flag: "🇵🇹", cities: ["리스본", "포르투", "아마도라", "브라가"]},
    {name: "카타르", capital: "도하", flag: "🇶🇦", cities: ["도하", "알라이얀", "알와크라", "움살랄무함마드"]},
    {name: "루마니아", capital: "부쿠레슈티", flag: "🇷🇴", cities: ["부쿠레슈티", "클루지나포카", "티미쇼아라", "이아시"]},
    {name: "사우디아라비아", capital: "리야드", flag: "🇸🇦", cities: ["리야드", "지다", "메카", "메디나"]},
    {name: "싱가포르", capital: "싱가포르", flag: "🇸🇬", cities: ["싱가포르", "주롱", "창이", "우들랜즈"]},
    {name: "우크라이나", capital: "키이우", flag: "🇺🇦", cities: ["키이우", "하르키우", "오데사", "드니프로"]},
    {name: "아랍에미리트", capital: "아부다비", flag: "🇦🇪", cities: ["아부다비", "두바이", "샤르자", "알아인"]},
    {name: "볼리비아", capital: "수크레", flag: "🇧🇴", cities: ["수크레", "라파스", "산타크루스", "코차밤바"]},
    {name: "파키스탄", capital: "이슬라마바드", flag: "🇵🇰", cities: ["이슬라마바드", "카라치", "라호르", "파이살라바드"]}
];

let gameState = {
    currentQuestion: 0,
    correctAnswers: 0,
    selectedCountries: [],
    userAnswers: [],
    selectedOption: null,
    currentOptions: []
};

function startGame() {
    // 3개 국가 랜덤 선택
    gameState.selectedCountries = getRandomCountries(3);
    gameState.currentQuestion = 0;
    gameState.correctAnswers = 0;
    gameState.userAnswers = [];
    
    showScene('quiz-scene');
    showQuestion();
}

function getRandomCountries(count) {
    const shuffled = [...countries].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function showQuestion() {
    const country = gameState.selectedCountries[gameState.currentQuestion];
    document.getElementById('progress').textContent = `${gameState.currentQuestion + 1}/3`;
    document.getElementById('question').textContent = `${country.flag} ${country.name}의 수도는?`;
    
    // 객관식 선택지 생성
    createOptions(country);
    gameState.selectedOption = null;
    document.getElementById('submit-btn').disabled = true;
}

function createOptions(correctCountry) {
    // 해당 나라의 유명한 도시 4개를 선택지로 사용
    const cityOptions = [...correctCountry.cities].sort(() => 0.5 - Math.random());
    
    gameState.currentOptions = cityOptions.map(city => ({
        capital: city,
        isCorrect: city === correctCountry.capital
    }));
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    cityOptions.forEach((city, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.onclick = () => selectOption(index);
        
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        optionElement.innerHTML = `
            <span class="option-letter">${letter}</span>
            <span>${city}</span>
        `;
        
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(index) {
    // 이전 선택 제거
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // 새 선택 추가
    document.querySelectorAll('.option')[index].classList.add('selected');
    gameState.selectedOption = index;
    document.getElementById('submit-btn').disabled = false;
}

function submitAnswer() {
    if (gameState.selectedOption === null) {
        alert('답을 선택해주세요!');
        return;
    }

    const country = gameState.selectedCountries[gameState.currentQuestion];
    const selectedAnswer = gameState.currentOptions[gameState.selectedOption];
    const isCorrect = selectedAnswer.isCorrect;
    
    gameState.userAnswers.push({
        country: country.name,
        userAnswer: selectedAnswer.capital,
        correctAnswer: country.capital,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        gameState.correctAnswers++;
    }

    gameState.currentQuestion++;

    if (gameState.currentQuestion < 3) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    showScene('result-scene');
    
    const resultMessage = document.getElementById('result-message');
    const couponContainer = document.getElementById('coupon-container');
    
    if (gameState.correctAnswers === 3) {
        resultMessage.innerHTML = '🎉 세계 정복자! 축하합니다!';
        resultMessage.className = 'result-message success';
        
        couponContainer.innerHTML = `
            <div class="coupon">
                💰 1,000원 할인 쿠폰
                <br><small>축하합니다!</small>
            </div>
            <button class="btn" onclick="saveCoupon()">📥 쿠폰 저장</button>
        `;
        
        createConfetti();
        playSound('success');
    } else {
        resultMessage.innerHTML = `😅 ${gameState.correctAnswers}개 정답! 다음 기회에 도전해보세요!`;
        resultMessage.className = 'result-message fail';
        
        showFailAnimation();
        playSound('fail');
    }
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            document.querySelector('.game-container').appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

function showFailAnimation() {
    const img = document.createElement('img');
    img.src = 'ggg.png';
    img.className = 'slide-animation';
    img.style.width = '100px';
    img.style.height = '100px';
    document.querySelector('.game-container').appendChild(img);
    
    setTimeout(() => {
        img.remove();
    }, 4000);
}

function playSound(type) {
    const sound = document.getElementById(type === 'success' ? 'success-sound' : 'fail-sound');
    sound.currentTime = 0;
    sound.play().catch(e => console.log('소리 재생에 실패했습니다:', e));
}

function saveCoupon() {
    // Canvas로 쿠폰 이미지 생성
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // 캔버스 크기 설정 (모바일 친화적)
    canvas.width = 600;
    canvas.height = 300;
    
    // 배경 그라데이션
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ff6b6b');
    gradient.addColorStop(1, '#ffa500');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 외곽선
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // 내부 장식선
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 5]);
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    ctx.setLineDash([]);
    
    // 텍스트 설정
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 4;
    
    // 제목
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.fillText('🎉 축하합니다! 🎉', canvas.width / 2, 80);
    
    // 쿠폰 금액
    ctx.font = 'bold 72px Arial, sans-serif';
    ctx.fillStyle = '#ffff00';
    ctx.strokeStyle = '#ff4444';
    ctx.lineWidth = 3;
    ctx.strokeText('₩1,000', canvas.width / 2, 150);
    ctx.fillText('₩1,000', canvas.width / 2, 150);
    
    // 할인 쿠폰 텍스트
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.fillText('할인 쿠폰', canvas.width / 2, 190);
    
    // 하단 텍스트
    ctx.font = '20px Arial, sans-serif';
    ctx.fillText('🌍 수도 퀴즈 챌린지 완주 기념', canvas.width / 2, 230);
    
    // 날짜
    const today = new Date();
    const dateStr = `${today.getFullYear()}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getDate().toString().padStart(2, '0')}`;
    ctx.font = '16px Arial, sans-serif';
    ctx.fillText(`발급일: ${dateStr}`, canvas.width / 2, 260);
    
    // 그림자 제거
    ctx.shadowColor = 'transparent';
    
    // 장식 요소들
    drawStar(ctx, 80, 80, 25, '#ffff00');
    drawStar(ctx, canvas.width - 80, 80, 25, '#ffff00');
    drawStar(ctx, 80, canvas.height - 80, 25, '#ffff00');
    drawStar(ctx, canvas.width - 80, canvas.height - 80, 25, '#ffff00');
    
    // 이미지 다운로드
    canvas.toBlob(function(blob) {
        const link = document.createElement('a');
        link.download = `수도퀴즈_할인쿠폰_${dateStr}.png`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
        
        // 성공 메시지
        setTimeout(() => {
            alert('🎉 쿠폰이 다운로드 폴더에 저장되었습니다!\n파일명: ' + link.download);
        }, 100);
    }, 'image/png');
}

function drawStar(ctx, x, y, size, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = '#ff4444';
    ctx.lineWidth = 2;
    ctx.translate(x, y);
    ctx.beginPath();
    
    for (let i = 0; i < 5; i++) {
        ctx.lineTo(0, -size);
        ctx.translate(0, -size);
        ctx.rotate(Math.PI / 5);
        ctx.lineTo(0, size / 2);
        ctx.translate(0, size / 2);
        ctx.rotate(Math.PI / 5);
    }
    
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function goHome() {
    showScene('start-scene');
}

function showScene(sceneId) {
    document.querySelectorAll('.scene').forEach(scene => {
        scene.classList.remove('active');
    });
    document.getElementById(sceneId).classList.add('active', 'fade-in');
}

// 키보드 단축키 (A, B, C, D)
document.addEventListener('keypress', function(e) {
    if (document.getElementById('quiz-scene').classList.contains('active')) {
        const key = e.key.toLowerCase();
        if (['a', 'b', 'c', 'd'].includes(key)) {
            const index = key.charCodeAt(0) - 97; // a=0, b=1, c=2, d=3
            if (index < gameState.currentOptions.length) {
                selectOption(index);
            }
        } else if (e.key === 'Enter' && gameState.selectedOption !== null) {
            submitAnswer();
        }
    }
}); 