#!/usr/bin/env python3
"""Pagination helper utilities."""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return start and end indexes for a pagination range.

    Args:
        page: The current page number, starting from 1.
        page_size: The number of items expected on each page.

    Returns:
        A tuple containing the start index (inclusive) and end index
        (exclusive) for the requested page.
    """
    page_end = page * page_size
    page_start = page_end - page_size
    return (page_start, page_end)
