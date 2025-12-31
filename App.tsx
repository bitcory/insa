import React, { useState } from 'react';
import Hero from './components/Hero';
import GreetingMessage from './components/GreetingMessage';
import ContactBar from './components/ContactBar';

const FIXED_MESSAGE = `올해 흘린 땀방울, 2026년엔 꽃길로 돌려드릴게요 🌸

힘든 하루 끝에도 묵묵히 책상 앞에 앉으셨던 그 시간들,
쉽고 편하게 이수하실 수 있도록 지켜드린 저의 노력도 느끼셨나요?
이제 그 노력이 자격증으로, 학위로, 그리고 새로운 기회로 피어날 차례예요.

---

혹시 주변에 이런 분 계신가요?

🙋 "나도 뭔가 시작하고 싶은데..." 망설이는 분
🙋 "직장 다니면서 가능할까?" 걱정하는 분
🙋 "혼자서 할 수 있을까?" 막막해하는 분

"우리 효진 선생님한테 한번 연락해봐"
그 한마디만 건네주세요.

학습자님께 쏟았던 그 정성 그대로,
아니, 그보다 더한 관심으로 끝까지 책임지고 이끌어드리겠습니다. 💪

---

2026년, 우리 학습자님도 소중한 분들도 — 모두 함께 꽃길 걸어요 🌸

새해 복 많이 받으세요!`;

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [message, setMessage] = useState<string>(FIXED_MESSAGE);
  const [loading] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans pb-24 max-w-md mx-auto shadow-2xl overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #b91c1c 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <Hero />

      <main className="relative z-10">
        <GreetingMessage
          message={message}
          loading={loading}
        />
      </main>

      <ContactBar />
    </div>
  );
};

export default App;