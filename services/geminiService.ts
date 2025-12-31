import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateGreetingMessage = async (): Promise<string> => {
  try {
    const prompt = `
      작성 역할: 학생들을 위해 헌신했지만, 이제는 그에 대한 보답(지인 소개)을 은근하지만 확실하게 요구하는 능글맞고 인간미 넘치는 플래너.
      
      필수 포함 내용:
      1. 후킹 메시지: "남들이 놀 때 당신이 이룬 기적" 같은 강렬한 첫 문장.
      2. 팩트 폭격(칭찬): 2025년 남들은 허송세월할 때 공부한 학생들을 치켜세워줄 것.
      3. 은혜 상기(부채감 유도): 성적 과락 방지, 시험/과제/토론 등 귀찮은 것들을 내가 다 막아주고 해결해줬음을 감성적으로 언급. "솔직히 제가 다 해드렸잖아요?" 느낌을 아주 정중하고 고맙게 표현.
      4. 행동 유도: "그러니까 주변 지인 소개 좀 시켜주세요"를 정중하게 부탁.
      5. 고정 엔딩: "이 자격증과 학위가 우리 쌤들에게 꼭 꽃길이 되어줬음 좋겠다"

      톤앤매너: 감동적이지만 실속 있는, 따뜻하지만 목적이 분명한.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.6,
        systemInstruction: "You are a copywriter specializing in persuasive letters.",
      }
    });

    return response.text || "메시지 생성 실패";
  } catch (error) {
    console.error("Error generating greeting:", error);
    return "";
  }
};