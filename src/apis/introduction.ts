import { api } from ".";


export async function getIntroduce() {
    try {
      const response = await api.get(`http://52.79.142.78:8080/api/v1/council/images`);
      return response.data;
    } catch (error) {
      console.error("소개 get 중 오류 발생:", error);
      throw error;
    }
}

export async function getCommittee() {
    try {
      const response = await api.get(`http://52.79.142.78:8080/api/v1/committees`);
      return response.data;
    } catch (error) {
      console.error("중운위 get 중 오류 발생:", error);
      throw error;
    }
}

export async function getEachPart() {
    try {
      const response = await api.get(`http://52.79.142.78:8080/api/v1/departments`);
      return response.data;
    } catch (error) {
      console.error("국소개 get 중 오류 발생:", error);
      throw error;
    }
}

export async function getOrganization() {
    try {
      const response = await api.get(`http://52.79.142.78:8080/api/v1/organizations`);
      return response.data;
    } catch (error) {
      console.error("조직도 get 중 오류 발생:", error);
      throw error;
    }
}

// 소개 추가 API
export async function postIntroduction(description: string, image: File | undefined) {
  try {
    const formData = new FormData();
    formData.append("request", new Blob([JSON.stringify({ description })], { type: "application/json" }));
    if (image) formData.append("image", image);

    const response = await api.post(`http://52.79.142.78:8080/api/v1/council/images`, formData);
    return response.data;
  } catch (error) {
    console.error("소개 추가 요청 중 오류 발생:", error);
    throw error;
  }
}

// 소개 수정 API
export async function putIntroduction(committeeId: number, description: string, image: File | undefined) {
  try {
    const formData = new FormData();
    formData.append("request", new Blob([JSON.stringify({ description })], { type: "application/json" }));
    if (image) formData.append("image", image);

    const response = await api.put(
      `http://52.79.142.78:8080/api/v1/images/${committeeId}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return response.data;
  } catch (error) {
    console.error("소개 수정 요청 중 오류 발생:", error);
    throw error;
  }
}

export async function deleteIntroduction(councilImageId: number) {
  try {
    const response = await api.delete(
      `http://52.79.142.78:8080/api/v1/council/images/${councilImageId}`
    );
    return response.data;
  } catch (error) {
    console.error("소개 삭제 요청 중 오류 발생:", error);
    throw error;
  }
}

////////////////////////////////organization

// 조직도 추가 API
export async function postOrganization(titles: string, images: File | undefined) {
  try {
    const formData = new FormData();
    formData.append("request", new Blob([JSON.stringify({ titles })], { type: "application/json" }));
    if (images) formData.append("images", images);

    const response = await api.post(`http://52.79.142.78:8080/api/v1/organizations`, formData);
    return response.data;
  } catch (error) {
    console.error("요청 중 오류 발생:", error);
    throw error;
  }
}

// 조직도 수정 API
export async function putOrganization(organizationId: number, title: string, image: File | undefined) {
  try {
    const formData = new FormData();
    formData.append("request", new Blob([JSON.stringify({ title })], { type: "application/json" }));
    if (image) formData.append("image", image);

    const response = await api.put(`http://52.79.142.78:8080/api/v1/organizations/${organizationId}`, formData);
    return response.data;
  } catch (error) {
    console.error("요청 중 오류 발생:", error);
    throw error;
  }
}

export async function deleteOrganization(organizationId: number) {
  try {
    const response = await api.delete(
      `http://52.79.142.78:8080/api/v1/organizations/${organizationId}`
    );
    return response.data;
  } catch (error) {
    console.error("삭제 요청 중 오류 발생:", error);
    throw error;
  }
}

////////////////////////////////eachpart

// 부서 추가 API
export async function postDepartment(description: string, image: File | undefined) {
  try {
    const formData = new FormData();
    formData.append("request", new Blob([JSON.stringify({ description })], { type: "application/json" }));
    if (image) formData.append("image", image);

    const response = await api.post(`http://52.79.142.78:8080/api/v1/departments`, formData);
    return response.data;
  } catch (error) {
    console.error("post 요청 중 오류 발생:", error);
    throw error;
  }
}

// 부서 수정 API
export async function putDepartment(departmentId: number, description: string, image: File | undefined) {
  try {
    const formData = new FormData();
    formData.append("request", new Blob([JSON.stringify({ description })], { type: "application/json" }));
    if (image) formData.append("image", image);

    const response = await api.put(`http://52.79.142.78:8080/api/v1/departments/${departmentId}`, formData);
    return response.data;
  } catch (error) {
    console.error("put 요청 중 오류 발생:", error);
    throw error;
  }
}




export async function deleteDepartment(departmentId: number) {
  try {
    const response = await api.delete(
      `http://52.79.142.78:8080/api/v1/departments/${departmentId}`
    );
    return response.data;
  } catch (error) {
    console.error("삭제 요청 중 오류 발생:", error);
    throw error;
  }
}


// 단과대 추가 API
export async function postCommittees({ description, college, name, pageUrl, snsUrl, image }: { description: string; college: string; name: string; pageUrl: string; snsUrl: string; image: File | undefined }) {
  try {
    const formData = new FormData();
    formData.append(
      "request",
      new Blob([JSON.stringify({ description, college, name, pageUrl, snsUrl })], { type: "application/json" })
    );
    if (image) formData.append("image", image);

    const response = await api.post(`http://52.79.142.78:8080/api/v1/committees`, formData);
    return response.data;
  } catch (error) {
    console.error("단과대 추가 요청 중 오류 발생:", error);
    throw error;
  }
}

// 단과대 수정 API
export async function putCommittees({ committeeId, description, college, name, pageUrl, snsUrl, image }: { committeeId: number; description: string; college: string; name: string; pageUrl: string; snsUrl: string; image: File | undefined }) {
  try {
    const formData = new FormData();
    formData.append(
      "request",
      new Blob([JSON.stringify({ description, college, name, pageUrl, snsUrl })], { type: "application/json" })
    );
    if (image) formData.append("image", image);

    const response = await api.put(`http://52.79.142.78:8080/api/v1/committees/${committeeId}`, formData);
    return response.data;
  } catch (error) {
    console.error("단과대 수정 요청 중 오류 발생:", error);
    throw error;
  }
}


// 이미지 및 콘텐츠 삭제 API
export async function deleteCommittees(committeeId: number) {
  try {
    const response = await api.delete(`http://52.79.142.78:8080/api/v1/committees/${committeeId}`);
    return response.data;
  } catch (error) {
    console.error("단과대 삭제 요청 중 오류 발생:", error);
    throw error;
  }
}
