#!/usr/bin/env python3
"""Asynchronous generator that yields random numbers."""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Yield 10 random floats between 0 and 10 at one-second intervals."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
