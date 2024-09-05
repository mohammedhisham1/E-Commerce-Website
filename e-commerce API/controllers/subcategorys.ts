import { NextFunction, Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import subcategoriesModel from "../models/subcategoriesModel";
import { Subcategories } from "../interfaces/subcategories";

// Get all subcategories
export const getAllSubcategories = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategories: Subcategories[] = await subcategoriesModel.find().populate('category');
  res.status(200).json({ data: subcategories });
});

// Create a new subcategory
export const createSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory: Subcategories = await subcategoriesModel.create(req.body);
  res.status(201).json({ data: subcategory });
});

// Get a single subcategory by ID
export const getSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory: Subcategories | null = await subcategoriesModel.findById(req.params.id).populate('category');
  res.status(200).json({ data: subcategory });
});

// Update a subcategory by ID
export const updateSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const subcategory: Subcategories | null = await subcategoriesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json({ data: subcategory });
});

// Delete a subcategory by ID
export const deleteSubcategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  await subcategoriesModel.findByIdAndDelete(req.params.id);
  res.status(204).json();
});
