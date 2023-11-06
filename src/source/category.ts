import { Ex } from "@/extension/ex";
import { Category, CategoryImp } from "@/dtos/Category";

export async function getCategory(id: string | number, str: string) {
  let category: Category = { active: false, id: 0, name: "", name_url: "" };
  try {
    const res: CategoryImp = (await Ex.apiClient().get(`/api/category/${id}`))
      .data;
    switch (str) {
      case "pt":
        category.name = res.name_pt;
        break;
      case "en":
        category.name = res.name_en;
        break;
      case "es":
        category.name = res.name_es;
        break;
      case "fr":
        category.name = res.name_fr;
        break;
    }
    return category;
  } catch (e) {
    return null;
  }
}

export async function getCategoryAll(str: string) {
  const res: CategoryImp[] = (await Ex.apiClient().get(`/api/category/all`))
    .data;

  const categorys = res.map((value, index) => {
    let category: Category = {
      active: true,
      id: 0,
      name: "",
      name_url: value.name_url,
    };
    switch (str) {
      case "pt":
        category.name = value.name_pt;
        break;
      case "en":
        category.name = value.name_en;
        break;
      case "es":
        category.name = value.name_es;
        break;
      case "fr":
        category.name = value.name_fr;
        break;
    }
    return category;
  });

  return categorys;
}
