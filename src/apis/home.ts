import {api} from ".";


export const getFooter = async () => {
  const response = await api.get("http://52.79.142.78:8080/api/v1/council");
  return response.data;
};

// PUT 요청: 총학생회 정보 업데이트
export const putFooter = async (
  generation: string,
  name: string,
  email: string,
  snsUrl: string,
  imageFile: File
) => {
  const data = { generation, name, email, snsUrl };
  const formData = new FormData();

  // JSON 데이터를 Blob으로 감싸기
  formData.append(
    "request",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );

  // 이미지 파일 추가
  formData.append("image", imageFile);

  // API 호출
  const response = await api.put("http://52.79.142.78:8080/api/v1/council", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};




export async function getBanners() {
    try {
      const response = await api.get(`http://52.79.142.78:8080/api/v1/banners`);
      return response.data;
    } catch (error) {
      console.error("banner get 중 오류 발생:", error);
      throw error;
    }
}

export async function createBanner(image: File) {
  try {
    const formData = new FormData();
    formData.append("img", image);
    
    // POST 요청 보내기
    const response = await api.post(
      `http://52.79.142.78:8080/api/v1/banners`, 
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    
    return response.data;
  } catch (error) {
    console.error("Banner 생성 중 오류 발생:", error);
    throw error;
  }
}


// 2. Banner 삭제 (DELETE)
export async function deleteBanner(bannerId: number) {
  try {
    const response = await api.delete(`http://52.79.142.78:8080/api/v1/banners/${bannerId}`);
    return response.data;
  } catch (error) {
    console.error("Banner 삭제 중 오류 발생:", error);
    throw error;
  }
}

// 3. Banner 수정 (PATCH)
export async function updateBanner(bannerId: number, image: File) {
  try {
    const formData = new FormData();
    formData.append("img", image);

    const response = await api.patch(
      `http://52.79.142.78:8080/api/v1/banners/${bannerId}`, 
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    
    return response.data;
  } catch (error) {
    console.error("Banner 업데이트 중 오류 발생:", error);
    throw error;
  }
}