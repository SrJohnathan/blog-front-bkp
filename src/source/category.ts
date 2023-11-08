import { Ex } from "@/extension/ex";
import { Category, CategoryImp } from "@/dtos/Category";

export async function getCategory(id: string | number, str: string) {
  let category: Category = { active: false, id: 0, name: "", name_url: "" };
  try {
    const res: CategoryImp = (await Ex.apiClient().get(`/api/category/first/${id}`))
      .data;


    category.id = res.id
    category.name_url = res.name_url

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

export async function getCategoryNameUrl(name_url: string | number, str: string) {
  let category: Category = { active: false, id: 0, name: "", name_url: "" };
  try {
    const res: CategoryImp = (await Ex.apiClient().get(`/api/category/name/${name_url}`))
        .data;


    category.id = res.id
    category.name_url = res.name_url

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


export async function getAllCategories(str: string) {
  const res: CategoryImp[] = (await Ex.apiClient().get(`/api/category/all`))
    .data;

  const categoriesAll = res.map((value, index) => {
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

  return categoriesAll;
}
