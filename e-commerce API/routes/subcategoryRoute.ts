import { Router } from 'express';
import { createSubcategory, deleteSubcategory, getAllSubcategories, getSubcategory, updateSubcategory } from '../controllers/subcategories';

const subcategoriesRoute: Router = Router();

subcategoriesRoute.route('/')
  .get(getAllSubcategories)
  .post(createSubcategory);

subcategoriesRoute.route('/:id')
  .get(getSubcategory)
  .put(updateSubcategory)
  .delete(deleteSubcategory);

export default subcategoriesRoute;
