#!/usr/bin/env python3
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension

async def measure_runtime():
    time_start = time.time()
    await asyncio.gather(*[async_comprehension() for _ in range(4)])
    time_end = time.time()
    return time_end - time_start
