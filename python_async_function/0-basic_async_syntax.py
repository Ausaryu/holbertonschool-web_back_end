#!/usr/bin/env python3
'''
Basic async syntax module.
'''
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    '''
    Waits for a random delay between 0 and max_delay seconds.
    '''
    waiting_time = random.uniform(0, max_delay)
    await asyncio.sleep(waiting_time)
    return waiting_time
