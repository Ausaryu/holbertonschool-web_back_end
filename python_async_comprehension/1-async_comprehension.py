#!/usr/bin/env python3
"""Async comprehension utilities built on the async generator."""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect the values produced by ``async_generator`` into a list."""
    return [value async for value in async_generator()]
