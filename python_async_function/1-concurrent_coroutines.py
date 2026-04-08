#!/usr/bin/env python3
'''
Concurrent coroutines module.
'''
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    '''
    Executes wait_random n times and returns the delays in ascending order.
    '''
    coroutines = [wait_random(max_delay) for _ in range(n)]
    results = []

    for completed in asyncio.as_completed(coroutines):
        result = await completed
        results.append(result)
        
    return results
