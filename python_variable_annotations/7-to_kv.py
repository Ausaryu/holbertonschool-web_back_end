#!/usr/bin/env python3
'''
Key-value transformation module.
'''

import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    '''
    Returns a tuple with a string and the square of a numeric value.
    '''
    return (k, v * v)
