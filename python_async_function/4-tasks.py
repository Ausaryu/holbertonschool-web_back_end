#!/usr/bin/env python3
'''
Tasks coroutine module.
'''
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    '''
    Executes wait_random n times and returns the delays in ascending order.
    '''
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = []

    for completed in asyncio.as_completed(tasks):
        result = await completed
        results.append(result)

    return results
