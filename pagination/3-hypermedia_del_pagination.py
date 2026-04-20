#!/usr/bin/env python3
"""Deletion-resilient hypermedia pagination for the baby names dataset."""

import csv
from typing import Any, Dict, List, Optional


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self) -> None:
        """Initialize cached dataset containers."""
        self.__dataset: Optional[List[List[str]]] = None
        self.__indexed_dataset: Optional[Dict[int, List[str]]] = None

    def dataset(self) -> List[List[str]]:
        """Return the cached dataset loaded from the CSV file."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as file:
                reader = csv.reader(file)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List[str]]:
        """Return dataset indexed by sorted position starting from 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {i: dataset[i] for i in range(len(dataset))}
        return self.__indexed_dataset

    def get_hyper_index(
        self, index: Optional[int] = None, page_size: int = 10
    ) -> Dict[str, Any]:
        """Return deletion-resilient hypermedia pagination metadata."""
        if index is None:
            index = 0

        assert isinstance(index, int) and index >= 0
        assert isinstance(page_size, int) and page_size > 0

        indexed_dataset = self.indexed_dataset()
        max_index = max(indexed_dataset.keys(), default=0)
        assert index <= max_index

        data: List[List[str]] = []
        current_index = index

        while len(data) < page_size and current_index <= max_index:
            row = indexed_dataset.get(current_index)
            if row is not None:
                data.append(row)
            current_index += 1

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": current_index,
        }
