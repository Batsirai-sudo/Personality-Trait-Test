

export const fetchResult = async (data) => {
    const response = await fetch("http://localhost:3000/api/questions", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }); 
    return await response.json();
  };