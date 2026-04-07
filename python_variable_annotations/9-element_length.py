#!/usr/bin/env python3
'''
Element length module.
'''

import typing


def element_length(
        lst: typing.Iterable[typing.Sequence]
        ) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    '''
    Returns a list of tuples containing each sequence and its length.
    '''
    return [(i, len(i)) for i in lst]
