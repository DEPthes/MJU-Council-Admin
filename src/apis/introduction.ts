import { api } from ".";

//get은 잘 됨
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

export async function getDepartment() {
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
export const postIntroduction = async(description: string, image: File | undefined)=> {
  const formData = new FormData();

  formData.append("description", description);
  if(image) formData.append("image", image);

  try {
    const response = await api.post(`http://52.79.142.78:8080/api/v1/council/images`, formData, {headers: {"Content-Type":"multipart/form-data"}});
    return response.data;
  } catch (error) {
    console.error("소개 추가 요청 중 오류 발생:", error);
    throw error;
  }
}

// 소개 수정 API
export const putIntroduction = async(councilImageId: string, description: string, image: Blob) => {
  const formData = new FormData();
  formData.append("description", description), {type: "application/json"};
  if (image) formData.append("image", image); 
  try {
    const response = await api.put(`http://52.79.142.78:8080/api/v1/council/images/${councilImageId}`, formData, 
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "charset": "utf-8",
          "Origin": "http://localhost:3000",  // Origin 헤더 추가
        },});
    return response.data;
  } catch (error) {
    console.error("put 요청 중 오류 발생:", error);
    throw error;
  }
}
export async function deleteIntroduction(councilImageId: string) {
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
export const postOrganization = async(titles: string, images: File | undefined) => {
    const formData = new FormData();
    formData.append("titles", titles);
    if (images) formData.append("images", images);

  try {
    console.log(titles, images);
    const response = await api.post(`http://52.79.142.78:8080/api/v1/organizations`, formData, 
    {headers:{
      "Content-Type":"multipart/form-data",}});
    return response.data;
  } catch (error) {
    console.error("요청 중 오류 발생:", error);
    throw error;
  }
}

// 조직도 수정 API
export const putOrganization = async(organizationId: string, title: string, image: File | undefined) => {
  const formData = new FormData();
  formData.append("title", title);
  if (image) formData.append("image", image);
  try {
    const response = await api.put(`http://52.79.142.78:8080/api/v1/organizations/${organizationId}`, formData, 
    {headers:{
      "Content-Type":"multipart/form-data",
          "charset": "utf-8",
      "Origin": "http://localhost:3000",}});
    return response.data;
  } catch (error) {
    console.error("요청 중 오류 발생:", error);
    throw error;
  }
}

export async function deleteOrganization(organizationId: string) {
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
export const postDepartment = async(description: string, image: File | undefined) => {
  const formData = new FormData();
  formData.append("description", description);
  if (image) formData.append("image", image);

  try {
    const response = await api.post(`http://52.79.142.78:8080/api/v1/departments`, formData, {headers:{"Content-Type":"multipart/form-data"}});
    return response.data;
  } catch (error) {
    console.error("post 요청 중 오류 발생:", error);
    throw error;
  }
}

// 부서 수정 API
export const putDepartment = async(departmentId: string, description: string, image: File | undefined) => {
  const formData = new FormData();
  formData.append("description", description);
  if (image) formData.append("image", image); console.log(image);
  try {
    const response = await api.put(`http://52.79.142.78:8080/api/v1/departments/${departmentId}`, formData, 
    {headers:{
      "Content-Type":"multipart/form-data",
      "Origin": "http://localhost:3000"}});
    return response.data;
  } catch (error) {
    console.error("put 요청 중 오류 발생:", error);
    throw error;
  }
}




export async function deleteDepartment(departmentId: string) {
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
export const postCommittees = async(description: string|null, college: string|null, name: string|null, pageUrl: string|null, snsUrl: string|null, image: File | undefined ) => {
  const formData = new FormData();
  formData.append(
    "request",
    new Blob([JSON.stringify({ description, college, name, pageUrl, snsUrl })], { type: "application/json" })
  );
  if (image) formData.append("image", image);
  try {

    const response = await api.post(`http://52.79.142.78:8080/api/v1/committees`, formData, {headers:{"Content-Type":"multipart/form-data"}});
    return response.data;
  } catch (error) {
    console.error("단과대 추가 요청 중 오류 발생:", error);
    throw error;
  }
}

// 단과대 수정 API
export const putCommittees = async(committeeId: string, description: string |null, college: string|null, name: string|null, pageUrl: string|null, snsUrl: string|null, image: File | undefined ) => {
  const formData = new FormData();
  formData.append(
    "request",
    new Blob([JSON.stringify({ description, college, name, pageUrl, snsUrl })], { type: "application/json" })
  );
  if (image) formData.append("image", image);
  try {
    const response = await api.put(`http://52.79.142.78:8080/api/v1/committees/${committeeId}`, formData, 
    {headers:{
      "Content-Type":"multipart/form-data",
      "Origin": "http://localhost:3000",}});
    return response.data;
  } catch (error) {
    console.error("단과대 수정 요청 중 오류 발생:", error);
    throw error;
  }
}


// 이미지 및 콘텐츠 삭제 API
export async function deleteCommittees(committeeId: string) {
  try {
    const response = await api.delete(`http://52.79.142.78:8080/api/v1/committees/${committeeId}`);
    return response.data;
  } catch (error) {
    console.error("단과대 삭제 요청 중 오류 발생:", error);
    throw error;
  }
}
